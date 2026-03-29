document.addEventListener('DOMContentLoaded', () => {
    // ---- Prediction Logic ----
    const areaInput = document.getElementById('area');
    const bedroomsInput = document.getElementById('bedrooms');
    const bathroomsInput = document.getElementById('bathrooms');
    const predictBtn = document.getElementById('predict-btn');
    const resultSection = document.getElementById('result-section');
    const priceDisplay = document.getElementById('price-display');

    predictBtn.addEventListener('click', () => {
        const area = parseFloat(areaInput.value) || 0;
        const bedrooms = parseFloat(bedroomsInput.value) || 0;
        const bathrooms = parseFloat(bathroomsInput.value) || 0;

        if (area <= 0) {
            alert("Please enter a valid area (sq ft) to get a prediction.");
            return;
        }

        // Call our machine learning model from model.js
        if (typeof score !== 'undefined') {
            const prediction = score([area, bedrooms, bathrooms]);
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            });
            priceDisplay.textContent = formatter.format(prediction);
            resultSection.classList.remove('hidden');
        } else {
            alert("Model is not loaded properly!");
        }
    });

    // ---- Hero Scroll Animation Logic ----
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const context = canvas.getContext('2d');
        const frameCount = 184;
        
        // Helper to get formatted frame path
        const currentFrame = index => (
            `inimationspics/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
        );

        // Preload all images directly into memory for instant playback
        const images = [];
        const preloadImages = () => {
            for (let i = 1; i <= frameCount; i++) {
                images[i] = new Image();
                images[i].src = currentFrame(i);
            }
        };

        // Draw an image so it acts like CSS "object-fit: cover"
        function drawObjectCover(ctx, image, cw, ch) {
            const iw = image.width, ih = image.height;
            const r = Math.max(cw / iw, ch / ih);
            const nw = iw * r, nh = ih * r;
            const nx = (cw - nw) / 2, ny = (ch - nh) / 2;
            
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(image, nx, ny, nw, nh);
        }

        // Initialize first frame
        const img = new Image();
        img.src = currentFrame(1);
        
        // Match canvas logical size to display size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();

        img.onload = function() {
            drawObjectCover(context, img, canvas.width, canvas.height);
        };

        // Handle browser resize
        window.addEventListener('resize', () => {
            resizeCanvas();
            // Re-render essentially current frame directly via scroll handler logic
            updateFrameForScroll();
        });

        // Fast render function using preloaded cache
        const updateImage = index => {
            if (images[index] && images[index].complete) {
                drawObjectCover(context, images[index], canvas.width, canvas.height);
            } else {
                // Flash fallback if scrolling extremely fast before preload ends
                const dynamicImg = new Image();
                dynamicImg.src = currentFrame(index);
                dynamicImg.onload = () => drawObjectCover(context, dynamicImg, canvas.width, canvas.height);
            }
        };

        const updateFrameForScroll = () => {
            const section = document.getElementById('hero-scroll');
            if (!section) return;

            // Fade out the House Price Predictor text as they scroll deep into animation
            const heroText = document.getElementById('hero-text');
            const fadePoint = window.innerHeight * 0.4; // start fading slightly down
            if (window.scrollY > fadePoint && heroText) {
                heroText.style.opacity = '0';
            } else if (heroText) {
                heroText.style.opacity = '1';
            }

            // Calculate the percentage travelled down the 300vh scrolling track
            const maxScroll = section.offsetHeight - window.innerHeight;
            let scrollFraction = window.scrollY / maxScroll;
            if (scrollFraction > 1) scrollFraction = 1;
            if (scrollFraction < 0) scrollFraction = 0;

            const frameIndex = Math.min(
                frameCount,
                Math.max(1, Math.ceil(scrollFraction * frameCount))
            );

            // Using requestAnimationFrame to ensure smooth high-Hz rendering
            requestAnimationFrame(() => updateImage(frameIndex));
        };

        window.addEventListener('scroll', updateFrameForScroll);

        // Start preloading so the scroll experience is flawlessly buttery
        preloadImages();
    }
});
