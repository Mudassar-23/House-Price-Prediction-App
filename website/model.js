function score(input) {
    var var0;
    if (input[0] <= 1750.0) {
        if (input[1] <= 2.5) {
            var0 = 180000.0;
        } else {
            var0 = 250000.0;
        }
    } else {
        if (input[0] <= 2100.0) {
            var0 = 300000.0;
        } else {
            var0 = 350000.0;
        }
    }
    var var1;
    if (input[2] <= 1.5) {
        var1 = 180000.0;
    } else {
        if (input[0] <= 2250.0) {
            if (input[0] <= 1900.0) {
                var1 = 280000.0;
            } else {
                var1 = 300000.0;
            }
        } else {
            var1 = 400000.0;
        }
    }
    var var2;
    if (input[1] <= 3.5) {
        if (input[1] <= 2.5) {
            var2 = 180000.0;
        } else {
            if (input[0] <= 1650.0) {
                var2 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var2 = 280000.0;
                } else {
                    var2 = 300000.0;
                }
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var2 = 350000.0;
        } else {
            var2 = 400000.0;
        }
    }
    var var3;
    if (input[1] <= 3.5) {
        if (input[0] <= 1650.0) {
            var3 = 250000.0;
        } else {
            if (input[0] <= 1900.0) {
                var3 = 280000.0;
            } else {
                var3 = 300000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var3 = 350000.0;
        } else {
            var3 = 400000.0;
        }
    }
    var var4;
    if (input[0] <= 1750.0) {
        if (input[0] <= 1350.0) {
            var4 = 180000.0;
        } else {
            var4 = 250000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            var4 = 300000.0;
        } else {
            var4 = 350000.0;
        }
    }
    var var5;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var5 = 150000.0;
        } else {
            var5 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1900.0) {
                var5 = 280000.0;
            } else {
                var5 = 300000.0;
            }
        } else {
            if (input[0] <= 2350.0) {
                var5 = 350000.0;
            } else {
                var5 = 400000.0;
            }
        }
    }
    var var6;
    if (input[1] <= 3.5) {
        if (input[0] <= 1350.0) {
            var6 = 180000.0;
        } else {
            var6 = 250000.0;
        }
    } else {
        var6 = 400000.0;
    }
    var var7;
    if (input[1] <= 3.5) {
        if (input[0] <= 1900.0) {
            var7 = 280000.0;
        } else {
            var7 = 300000.0;
        }
    } else {
        var7 = 350000.0;
    }
    var var8;
    if (input[2] <= 2.0) {
        if (input[0] <= 1100.0) {
            var8 = 150000.0;
        } else {
            var8 = 180000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            var8 = 350000.0;
        } else {
            var8 = 400000.0;
        }
    }
    var var9;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var9 = 150000.0;
        } else {
            var9 = 180000.0;
        }
    } else {
        if (input[0] <= 1750.0) {
            var9 = 250000.0;
        } else {
            var9 = 300000.0;
        }
    }
    var var10;
    if (input[0] <= 2000.0) {
        if (input[0] <= 1250.0) {
            var10 = 150000.0;
        } else {
            if (input[0] <= 1650.0) {
                var10 = 250000.0;
            } else {
                var10 = 280000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var10 = 350000.0;
        } else {
            var10 = 400000.0;
        }
    }
    var var11;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var11 = 150000.0;
        } else {
            var11 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1900.0) {
                var11 = 280000.0;
            } else {
                var11 = 300000.0;
            }
        } else {
            var11 = 350000.0;
        }
    }
    var var12;
    if (input[0] <= 2100.0) {
        if (input[0] <= 1650.0) {
            var12 = 250000.0;
        } else {
            if (input[0] <= 1900.0) {
                var12 = 280000.0;
            } else {
                var12 = 300000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var12 = 350000.0;
        } else {
            var12 = 400000.0;
        }
    }
    var var13;
    if (input[0] <= 2000.0) {
        if (input[1] <= 2.5) {
            var13 = 150000.0;
        } else {
            if (input[0] <= 1650.0) {
                var13 = 250000.0;
            } else {
                var13 = 280000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var13 = 350000.0;
        } else {
            var13 = 400000.0;
        }
    }
    var var14;
    if (input[0] <= 1400.0) {
        var14 = 150000.0;
    } else {
        if (input[0] <= 2000.0) {
            var14 = 280000.0;
        } else {
            if (input[0] <= 2350.0) {
                var14 = 350000.0;
            } else {
                var14 = 400000.0;
            }
        }
    }
    var var15;
    if (input[1] <= 3.5) {
        if (input[2] <= 1.5) {
            if (input[0] <= 1100.0) {
                var15 = 150000.0;
            } else {
                var15 = 180000.0;
            }
        } else {
            var15 = 250000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            var15 = 350000.0;
        } else {
            var15 = 400000.0;
        }
    }
    var var16;
    if (input[0] <= 1500.0) {
        var16 = 180000.0;
    } else {
        if (input[1] <= 3.5) {
            var16 = 280000.0;
        } else {
            var16 = 400000.0;
        }
    }
    var var17;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var17 = 150000.0;
        } else {
            var17 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1650.0) {
                var17 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var17 = 280000.0;
                } else {
                    var17 = 300000.0;
                }
            }
        } else {
            var17 = 350000.0;
        }
    }
    var var18;
    if (input[2] <= 2.5) {
        if (input[2] <= 1.5) {
            if (input[0] <= 1100.0) {
                var18 = 150000.0;
            } else {
                var18 = 180000.0;
            }
        } else {
            var18 = 250000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            var18 = 350000.0;
        } else {
            var18 = 400000.0;
        }
    }
    var var19;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var19 = 150000.0;
        } else {
            var19 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1650.0) {
                var19 = 250000.0;
            } else {
                var19 = 280000.0;
            }
        } else {
            var19 = 350000.0;
        }
    }
    var var20;
    if (input[0] <= 2250.0) {
        if (input[0] <= 1350.0) {
            var20 = 180000.0;
        } else {
            if (input[0] <= 1650.0) {
                var20 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var20 = 280000.0;
                } else {
                    var20 = 300000.0;
                }
            }
        }
    } else {
        var20 = 400000.0;
    }
    var var21;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var21 = 150000.0;
        } else {
            var21 = 180000.0;
        }
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1900.0) {
                var21 = 280000.0;
            } else {
                var21 = 300000.0;
            }
        } else {
            var21 = 350000.0;
        }
    }
    var var22;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var22 = 150000.0;
        } else {
            var22 = 180000.0;
        }
    } else {
        if (input[0] <= 2100.0) {
            if (input[0] <= 1900.0) {
                var22 = 280000.0;
            } else {
                var22 = 300000.0;
            }
        } else {
            if (input[0] <= 2350.0) {
                var22 = 350000.0;
            } else {
                var22 = 400000.0;
            }
        }
    }
    var var23;
    if (input[2] <= 2.5) {
        if (input[1] <= 2.5) {
            var23 = 150000.0;
        } else {
            if (input[0] <= 1900.0) {
                var23 = 280000.0;
            } else {
                var23 = 300000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var23 = 350000.0;
        } else {
            var23 = 400000.0;
        }
    }
    var var24;
    if (input[1] <= 3.5) {
        if (input[1] <= 2.5) {
            var24 = 150000.0;
        } else {
            if (input[0] <= 1900.0) {
                var24 = 280000.0;
            } else {
                var24 = 300000.0;
            }
        }
    } else {
        var24 = 400000.0;
    }
    var var25;
    if (input[0] <= 2000.0) {
        if (input[2] <= 1.5) {
            var25 = 150000.0;
        } else {
            var25 = 280000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            var25 = 350000.0;
        } else {
            var25 = 400000.0;
        }
    }
    var var26;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var26 = 150000.0;
        } else {
            var26 = 180000.0;
        }
    } else {
        if (input[0] <= 1650.0) {
            var26 = 250000.0;
        } else {
            if (input[0] <= 1900.0) {
                var26 = 280000.0;
            } else {
                var26 = 300000.0;
            }
        }
    }
    var var27;
    if (input[1] <= 2.5) {
        var27 = 150000.0;
    } else {
        if (input[0] <= 2100.0) {
            if (input[0] <= 1650.0) {
                var27 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var27 = 280000.0;
                } else {
                    var27 = 300000.0;
                }
            }
        } else {
            var27 = 350000.0;
        }
    }
    var var28;
    if (input[0] <= 2250.0) {
        if (input[0] <= 1250.0) {
            var28 = 150000.0;
        } else {
            if (input[0] <= 1750.0) {
                var28 = 250000.0;
            } else {
                var28 = 300000.0;
            }
        }
    } else {
        var28 = 400000.0;
    }
    var var29;
    if (input[0] <= 1750.0) {
        if (input[0] <= 1350.0) {
            if (input[0] <= 1100.0) {
                var29 = 150000.0;
            } else {
                var29 = 180000.0;
            }
        } else {
            var29 = 250000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            if (input[1] <= 3.5) {
                var29 = 300000.0;
            } else {
                var29 = 350000.0;
            }
        } else {
            var29 = 400000.0;
        }
    }
    var var30;
    if (input[0] <= 1500.0) {
        if (input[0] <= 1100.0) {
            var30 = 150000.0;
        } else {
            var30 = 180000.0;
        }
    } else {
        if (input[0] <= 2100.0) {
            if (input[0] <= 1900.0) {
                var30 = 280000.0;
            } else {
                var30 = 300000.0;
            }
        } else {
            var30 = 350000.0;
        }
    }
    var var31;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var31 = 150000.0;
        } else {
            var31 = 180000.0;
        }
    } else {
        if (input[0] <= 2250.0) {
            var31 = 300000.0;
        } else {
            var31 = 400000.0;
        }
    }
    var var32;
    if (input[0] <= 1600.0) {
        var32 = 180000.0;
    } else {
        if (input[0] <= 2350.0) {
            if (input[2] <= 2.5) {
                var32 = 300000.0;
            } else {
                var32 = 350000.0;
            }
        } else {
            var32 = 400000.0;
        }
    }
    var var33;
    if (input[0] <= 2000.0) {
        if (input[0] <= 1350.0) {
            var33 = 180000.0;
        } else {
            if (input[0] <= 1650.0) {
                var33 = 250000.0;
            } else {
                var33 = 280000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var33 = 350000.0;
        } else {
            var33 = 400000.0;
        }
    }
    var var34;
    if (input[1] <= 2.5) {
        var34 = 180000.0;
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1650.0) {
                var34 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var34 = 280000.0;
                } else {
                    var34 = 300000.0;
                }
            }
        } else {
            var34 = 350000.0;
        }
    }
    var var35;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var35 = 150000.0;
        } else {
            var35 = 180000.0;
        }
    } else {
        if (input[0] <= 1750.0) {
            var35 = 250000.0;
        } else {
            if (input[2] <= 2.5) {
                var35 = 300000.0;
            } else {
                var35 = 350000.0;
            }
        }
    }
    var var36;
    if (input[1] <= 2.5) {
        var36 = 180000.0;
    } else {
        if (input[0] <= 1650.0) {
            var36 = 250000.0;
        } else {
            var36 = 280000.0;
        }
    }
    var var37;
    if (input[0] <= 2100.0) {
        if (input[0] <= 1650.0) {
            var37 = 250000.0;
        } else {
            if (input[0] <= 1900.0) {
                var37 = 280000.0;
            } else {
                var37 = 300000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var37 = 350000.0;
        } else {
            var37 = 400000.0;
        }
    }
    var var38;
    if (input[0] <= 2100.0) {
        if (input[2] <= 1.5) {
            var38 = 180000.0;
        } else {
            if (input[0] <= 1900.0) {
                var38 = 280000.0;
            } else {
                var38 = 300000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var38 = 350000.0;
        } else {
            var38 = 400000.0;
        }
    }
    var var39;
    if (input[1] <= 3.5) {
        if (input[0] <= 1650.0) {
            var39 = 250000.0;
        } else {
            if (input[0] <= 1900.0) {
                var39 = 280000.0;
            } else {
                var39 = 300000.0;
            }
        }
    } else {
        var39 = 350000.0;
    }
    var var40;
    if (input[0] <= 1750.0) {
        if (input[0] <= 1250.0) {
            var40 = 150000.0;
        } else {
            var40 = 250000.0;
        }
    } else {
        if (input[0] <= 2100.0) {
            var40 = 300000.0;
        } else {
            if (input[0] <= 2350.0) {
                var40 = 350000.0;
            } else {
                var40 = 400000.0;
            }
        }
    }
    var var41;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var41 = 150000.0;
        } else {
            var41 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1900.0) {
                var41 = 280000.0;
            } else {
                var41 = 300000.0;
            }
        } else {
            var41 = 400000.0;
        }
    }
    var var42;
    if (input[1] <= 3.5) {
        if (input[1] <= 2.5) {
            var42 = 180000.0;
        } else {
            var42 = 250000.0;
        }
    } else {
        var42 = 350000.0;
    }
    var var43;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var43 = 150000.0;
        } else {
            var43 = 180000.0;
        }
    } else {
        if (input[0] <= 2250.0) {
            if (input[0] <= 1900.0) {
                var43 = 280000.0;
            } else {
                var43 = 300000.0;
            }
        } else {
            var43 = 400000.0;
        }
    }
    var var44;
    if (input[2] <= 2.5) {
        var44 = 250000.0;
    } else {
        var44 = 350000.0;
    }
    var var45;
    if (input[2] <= 2.5) {
        if (input[2] <= 1.5) {
            if (input[0] <= 1100.0) {
                var45 = 150000.0;
            } else {
                var45 = 180000.0;
            }
        } else {
            if (input[0] <= 1650.0) {
                var45 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var45 = 280000.0;
                } else {
                    var45 = 300000.0;
                }
            }
        }
    } else {
        var45 = 400000.0;
    }
    var var46;
    if (input[1] <= 3.5) {
        if (input[0] <= 1500.0) {
            if (input[0] <= 1100.0) {
                var46 = 150000.0;
            } else {
                var46 = 180000.0;
            }
        } else {
            var46 = 280000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            var46 = 350000.0;
        } else {
            var46 = 400000.0;
        }
    }
    var var47;
    if (input[0] <= 2100.0) {
        if (input[1] <= 2.5) {
            var47 = 180000.0;
        } else {
            if (input[0] <= 1650.0) {
                var47 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var47 = 280000.0;
                } else {
                    var47 = 300000.0;
                }
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var47 = 350000.0;
        } else {
            var47 = 400000.0;
        }
    }
    var var48;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var48 = 150000.0;
        } else {
            var48 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1650.0) {
                var48 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var48 = 280000.0;
                } else {
                    var48 = 300000.0;
                }
            }
        } else {
            var48 = 350000.0;
        }
    }
    var var49;
    if (input[0] <= 1350.0) {
        if (input[0] <= 1100.0) {
            var49 = 150000.0;
        } else {
            var49 = 180000.0;
        }
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1750.0) {
                var49 = 250000.0;
            } else {
                var49 = 300000.0;
            }
        } else {
            var49 = 400000.0;
        }
    }
    var var50;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var50 = 150000.0;
        } else {
            var50 = 180000.0;
        }
    } else {
        if (input[0] <= 1750.0) {
            var50 = 250000.0;
        } else {
            var50 = 300000.0;
        }
    }
    var var51;
    if (input[2] <= 2.5) {
        if (input[0] <= 1650.0) {
            var51 = 250000.0;
        } else {
            var51 = 280000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            var51 = 350000.0;
        } else {
            var51 = 400000.0;
        }
    }
    var var52;
    if (input[0] <= 1350.0) {
        if (input[0] <= 1100.0) {
            var52 = 150000.0;
        } else {
            var52 = 180000.0;
        }
    } else {
        if (input[0] <= 1750.0) {
            var52 = 250000.0;
        } else {
            if (input[2] <= 2.5) {
                var52 = 300000.0;
            } else {
                var52 = 350000.0;
            }
        }
    }
    var var53;
    if (input[2] <= 1.5) {
        var53 = 180000.0;
    } else {
        if (input[0] <= 1750.0) {
            var53 = 250000.0;
        } else {
            if (input[2] <= 2.5) {
                var53 = 300000.0;
            } else {
                var53 = 350000.0;
            }
        }
    }
    var var54;
    if (input[0] <= 1850.0) {
        if (input[0] <= 1350.0) {
            if (input[0] <= 1100.0) {
                var54 = 150000.0;
            } else {
                var54 = 180000.0;
            }
        } else {
            var54 = 250000.0;
        }
    } else {
        var54 = 350000.0;
    }
    var var55;
    if (input[2] <= 2.5) {
        if (input[0] <= 1350.0) {
            var55 = 180000.0;
        } else {
            var55 = 250000.0;
        }
    } else {
        var55 = 350000.0;
    }
    var var56;
    if (input[1] <= 2.5) {
        var56 = 150000.0;
    } else {
        if (input[0] <= 2100.0) {
            if (input[0] <= 1900.0) {
                var56 = 280000.0;
            } else {
                var56 = 300000.0;
            }
        } else {
            if (input[0] <= 2350.0) {
                var56 = 350000.0;
            } else {
                var56 = 400000.0;
            }
        }
    }
    var var57;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var57 = 150000.0;
        } else {
            var57 = 180000.0;
        }
    } else {
        if (input[1] <= 3.5) {
            var57 = 300000.0;
        } else {
            if (input[0] <= 2350.0) {
                var57 = 350000.0;
            } else {
                var57 = 400000.0;
            }
        }
    }
    var var58;
    if (input[1] <= 2.5) {
        var58 = 150000.0;
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1650.0) {
                var58 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var58 = 280000.0;
                } else {
                    var58 = 300000.0;
                }
            }
        } else {
            var58 = 350000.0;
        }
    }
    var var59;
    if (input[2] <= 2.5) {
        if (input[2] <= 1.5) {
            var59 = 150000.0;
        } else {
            if (input[0] <= 1650.0) {
                var59 = 250000.0;
            } else {
                var59 = 280000.0;
            }
        }
    } else {
        var59 = 400000.0;
    }
    var var60;
    if (input[1] <= 3.5) {
        var60 = 300000.0;
    } else {
        if (input[0] <= 2350.0) {
            var60 = 350000.0;
        } else {
            var60 = 400000.0;
        }
    }
    var var61;
    if (input[0] <= 2150.0) {
        if (input[2] <= 1.5) {
            var61 = 180000.0;
        } else {
            if (input[0] <= 1650.0) {
                var61 = 250000.0;
            } else {
                var61 = 280000.0;
            }
        }
    } else {
        var61 = 400000.0;
    }
    var var62;
    if (input[1] <= 3.5) {
        if (input[0] <= 1650.0) {
            var62 = 250000.0;
        } else {
            var62 = 280000.0;
        }
    } else {
        var62 = 350000.0;
    }
    var var63;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var63 = 150000.0;
        } else {
            var63 = 180000.0;
        }
    } else {
        if (input[1] <= 3.5) {
            var63 = 280000.0;
        } else {
            if (input[0] <= 2350.0) {
                var63 = 350000.0;
            } else {
                var63 = 400000.0;
            }
        }
    }
    var var64;
    if (input[0] <= 1350.0) {
        var64 = 180000.0;
    } else {
        if (input[0] <= 1650.0) {
            var64 = 250000.0;
        } else {
            if (input[0] <= 1900.0) {
                var64 = 280000.0;
            } else {
                var64 = 300000.0;
            }
        }
    }
    var var65;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var65 = 150000.0;
        } else {
            var65 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1650.0) {
                var65 = 250000.0;
            } else {
                var65 = 280000.0;
            }
        } else {
            var65 = 400000.0;
        }
    }
    var var66;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var66 = 150000.0;
        } else {
            var66 = 180000.0;
        }
    } else {
        if (input[0] <= 2000.0) {
            var66 = 280000.0;
        } else {
            if (input[0] <= 2350.0) {
                var66 = 350000.0;
            } else {
                var66 = 400000.0;
            }
        }
    }
    var var67;
    if (input[0] <= 1500.0) {
        if (input[0] <= 1100.0) {
            var67 = 150000.0;
        } else {
            var67 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1900.0) {
                var67 = 280000.0;
            } else {
                var67 = 300000.0;
            }
        } else {
            var67 = 350000.0;
        }
    }
    var var68;
    if (input[0] <= 1650.0) {
        if (input[1] <= 2.5) {
            if (input[0] <= 1100.0) {
                var68 = 150000.0;
            } else {
                var68 = 180000.0;
            }
        } else {
            var68 = 250000.0;
        }
    } else {
        if (input[0] <= 2000.0) {
            var68 = 280000.0;
        } else {
            if (input[0] <= 2350.0) {
                var68 = 350000.0;
            } else {
                var68 = 400000.0;
            }
        }
    }
    var var69;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var69 = 150000.0;
        } else {
            var69 = 180000.0;
        }
    } else {
        if (input[0] <= 1750.0) {
            var69 = 250000.0;
        } else {
            var69 = 300000.0;
        }
    }
    var var70;
    if (input[2] <= 2.5) {
        if (input[0] <= 1750.0) {
            var70 = 250000.0;
        } else {
            var70 = 300000.0;
        }
    } else {
        var70 = 400000.0;
    }
    var var71;
    if (input[0] <= 1250.0) {
        var71 = 150000.0;
    } else {
        if (input[0] <= 2000.0) {
            if (input[0] <= 1650.0) {
                var71 = 250000.0;
            } else {
                var71 = 280000.0;
            }
        } else {
            var71 = 350000.0;
        }
    }
    var var72;
    if (input[1] <= 2.5) {
        if (input[0] <= 1100.0) {
            var72 = 150000.0;
        } else {
            var72 = 180000.0;
        }
    } else {
        if (input[0] <= 2000.0) {
            if (input[0] <= 1650.0) {
                var72 = 250000.0;
            } else {
                var72 = 280000.0;
            }
        } else {
            var72 = 350000.0;
        }
    }
    var var73;
    if (input[0] <= 1500.0) {
        if (input[0] <= 1100.0) {
            var73 = 150000.0;
        } else {
            var73 = 180000.0;
        }
    } else {
        if (input[0] <= 2000.0) {
            var73 = 280000.0;
        } else {
            if (input[0] <= 2350.0) {
                var73 = 350000.0;
            } else {
                var73 = 400000.0;
            }
        }
    }
    var var74;
    if (input[1] <= 2.5) {
        var74 = 180000.0;
    } else {
        if (input[0] <= 2100.0) {
            var74 = 300000.0;
        } else {
            if (input[0] <= 2350.0) {
                var74 = 350000.0;
            } else {
                var74 = 400000.0;
            }
        }
    }
    var var75;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var75 = 150000.0;
        } else {
            var75 = 180000.0;
        }
    } else {
        if (input[0] <= 2250.0) {
            if (input[0] <= 1650.0) {
                var75 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var75 = 280000.0;
                } else {
                    var75 = 300000.0;
                }
            }
        } else {
            var75 = 400000.0;
        }
    }
    var var76;
    if (input[1] <= 2.5) {
        var76 = 180000.0;
    } else {
        if (input[0] <= 2100.0) {
            if (input[0] <= 1900.0) {
                var76 = 280000.0;
            } else {
                var76 = 300000.0;
            }
        } else {
            if (input[0] <= 2350.0) {
                var76 = 350000.0;
            } else {
                var76 = 400000.0;
            }
        }
    }
    var var77;
    if (input[0] <= 2250.0) {
        if (input[2] <= 1.5) {
            var77 = 180000.0;
        } else {
            if (input[0] <= 1900.0) {
                var77 = 280000.0;
            } else {
                var77 = 300000.0;
            }
        }
    } else {
        var77 = 400000.0;
    }
    var var78;
    if (input[0] <= 1350.0) {
        var78 = 180000.0;
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1650.0) {
                var78 = 250000.0;
            } else {
                var78 = 280000.0;
            }
        } else {
            var78 = 350000.0;
        }
    }
    var var79;
    if (input[0] <= 2100.0) {
        if (input[2] <= 1.5) {
            var79 = 180000.0;
        } else {
            if (input[0] <= 1650.0) {
                var79 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var79 = 280000.0;
                } else {
                    var79 = 300000.0;
                }
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var79 = 350000.0;
        } else {
            var79 = 400000.0;
        }
    }
    var var80;
    if (input[1] <= 3.5) {
        if (input[0] <= 1350.0) {
            if (input[0] <= 1100.0) {
                var80 = 150000.0;
            } else {
                var80 = 180000.0;
            }
        } else {
            if (input[0] <= 1650.0) {
                var80 = 250000.0;
            } else {
                var80 = 280000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var80 = 350000.0;
        } else {
            var80 = 400000.0;
        }
    }
    var var81;
    if (input[0] <= 1650.0) {
        if (input[0] <= 1350.0) {
            var81 = 180000.0;
        } else {
            var81 = 250000.0;
        }
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1900.0) {
                var81 = 280000.0;
            } else {
                var81 = 300000.0;
            }
        } else {
            var81 = 350000.0;
        }
    }
    var var82;
    if (input[1] <= 3.0) {
        if (input[0] <= 1100.0) {
            var82 = 150000.0;
        } else {
            var82 = 180000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            var82 = 350000.0;
        } else {
            var82 = 400000.0;
        }
    }
    var var83;
    if (input[0] <= 1400.0) {
        var83 = 150000.0;
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1900.0) {
                var83 = 280000.0;
            } else {
                var83 = 300000.0;
            }
        } else {
            var83 = 400000.0;
        }
    }
    var var84;
    if (input[0] <= 1400.0) {
        var84 = 150000.0;
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1900.0) {
                var84 = 280000.0;
            } else {
                var84 = 300000.0;
            }
        } else {
            var84 = 400000.0;
        }
    }
    var var85;
    if (input[0] <= 1600.0) {
        if (input[0] <= 1100.0) {
            var85 = 150000.0;
        } else {
            var85 = 180000.0;
        }
    } else {
        var85 = 300000.0;
    }
    var var86;
    if (input[2] <= 2.5) {
        if (input[1] <= 2.5) {
            var86 = 180000.0;
        } else {
            var86 = 250000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            var86 = 350000.0;
        } else {
            var86 = 400000.0;
        }
    }
    var var87;
    if (input[2] <= 1.5) {
        var87 = 150000.0;
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1900.0) {
                var87 = 280000.0;
            } else {
                var87 = 300000.0;
            }
        } else {
            var87 = 400000.0;
        }
    }
    var var88;
    if (input[1] <= 3.5) {
        if (input[0] <= 1350.0) {
            var88 = 180000.0;
        } else {
            var88 = 250000.0;
        }
    } else {
        var88 = 350000.0;
    }
    var var89;
    if (input[0] <= 1350.0) {
        if (input[0] <= 1100.0) {
            var89 = 150000.0;
        } else {
            var89 = 180000.0;
        }
    } else {
        if (input[2] <= 2.5) {
            if (input[0] <= 1650.0) {
                var89 = 250000.0;
            } else {
                var89 = 280000.0;
            }
        } else {
            var89 = 400000.0;
        }
    }
    var var90;
    if (input[1] <= 3.5) {
        if (input[2] <= 1.5) {
            var90 = 180000.0;
        } else {
            if (input[0] <= 1650.0) {
                var90 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var90 = 280000.0;
                } else {
                    var90 = 300000.0;
                }
            }
        }
    } else {
        var90 = 400000.0;
    }
    var var91;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var91 = 150000.0;
        } else {
            var91 = 180000.0;
        }
    } else {
        if (input[0] <= 1900.0) {
            var91 = 280000.0;
        } else {
            var91 = 300000.0;
        }
    }
    var var92;
    if (input[1] <= 3.5) {
        if (input[2] <= 1.5) {
            var92 = 180000.0;
        } else {
            if (input[0] <= 1650.0) {
                var92 = 250000.0;
            } else {
                var92 = 280000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var92 = 350000.0;
        } else {
            var92 = 400000.0;
        }
    }
    var var93;
    if (input[2] <= 2.5) {
        if (input[1] <= 2.5) {
            if (input[0] <= 1100.0) {
                var93 = 150000.0;
            } else {
                var93 = 180000.0;
            }
        } else {
            if (input[0] <= 1650.0) {
                var93 = 250000.0;
            } else {
                var93 = 280000.0;
            }
        }
    } else {
        var93 = 400000.0;
    }
    var var94;
    if (input[0] <= 1500.0) {
        if (input[0] <= 1100.0) {
            var94 = 150000.0;
        } else {
            var94 = 180000.0;
        }
    } else {
        if (input[1] <= 3.5) {
            if (input[0] <= 1900.0) {
                var94 = 280000.0;
            } else {
                var94 = 300000.0;
            }
        } else {
            var94 = 400000.0;
        }
    }
    var var95;
    if (input[0] <= 1400.0) {
        var95 = 150000.0;
    } else {
        if (input[0] <= 2100.0) {
            if (input[0] <= 1900.0) {
                var95 = 280000.0;
            } else {
                var95 = 300000.0;
            }
        } else {
            if (input[0] <= 2350.0) {
                var95 = 350000.0;
            } else {
                var95 = 400000.0;
            }
        }
    }
    var var96;
    if (input[0] <= 2100.0) {
        if (input[0] <= 1650.0) {
            var96 = 250000.0;
        } else {
            if (input[0] <= 1900.0) {
                var96 = 280000.0;
            } else {
                var96 = 300000.0;
            }
        }
    } else {
        if (input[0] <= 2350.0) {
            var96 = 350000.0;
        } else {
            var96 = 400000.0;
        }
    }
    var var97;
    if (input[2] <= 1.5) {
        if (input[0] <= 1100.0) {
            var97 = 150000.0;
        } else {
            var97 = 180000.0;
        }
    } else {
        if (input[0] <= 2350.0) {
            if (input[1] <= 3.5) {
                var97 = 300000.0;
            } else {
                var97 = 350000.0;
            }
        } else {
            var97 = 400000.0;
        }
    }
    var var98;
    if (input[0] <= 1250.0) {
        var98 = 150000.0;
    } else {
        if (input[0] <= 2100.0) {
            if (input[0] <= 1650.0) {
                var98 = 250000.0;
            } else {
                if (input[0] <= 1900.0) {
                    var98 = 280000.0;
                } else {
                    var98 = 300000.0;
                }
            }
        } else {
            if (input[0] <= 2350.0) {
                var98 = 350000.0;
            } else {
                var98 = 400000.0;
            }
        }
    }
    var var99;
    if (input[0] <= 2250.0) {
        if (input[0] <= 1650.0) {
            var99 = 250000.0;
        } else {
            if (input[0] <= 1900.0) {
                var99 = 280000.0;
            } else {
                var99 = 300000.0;
            }
        }
    } else {
        var99 = 400000.0;
    }
    return (var0 + var1 + var2 + var3 + var4 + var5 + var6 + var7 + var8 + var9 + var10 + var11 + var12 + var13 + var14 + var15 + var16 + var17 + var18 + var19 + var20 + var21 + var22 + var23 + var24 + var25 + var26 + var27 + var28 + var29 + var30 + var31 + var32 + var33 + var34 + var35 + var36 + var37 + var38 + var39 + var40 + var41 + var42 + var43 + var44 + var45 + var46 + var47 + var48 + var49 + var50 + var51 + var52 + var53 + var54 + var55 + var56 + var57 + var58 + var59 + var60 + var61 + var62 + var63 + var64 + var65 + var66 + var67 + var68 + var69 + var70 + var71 + var72 + var73 + var74 + var75 + var76 + var77 + var78 + var79 + var80 + var81 + var82 + var83 + var84 + var85 + var86 + var87 + var88 + var89 + var90 + var91 + var92 + var93 + var94 + var95 + var96 + var97 + var98 + var99) * 0.01;
}
