'use strict';

function hsvToHex(color) {
    let [h, s, v] = color.replaceAll(/%|°/g, '').split(',');
    color = hsvEltorgbEl(h / 360, s / 100, v / 100);
    return rgbElToHex(color);
}

/**
 * Converts an hsvEl color value to rgbEl. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/hsvEl_color_space.
 * https://gist.github.com/mnpenner/6513318
 * Assumes h, s, and v are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  v       The value
 * @return  Array           The rgbEl representation
 */
function hsvEltorgbEl(h, s, v) {
    let r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        (s = h.s), (v = h.v), (h = h.h);
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            (r = v), (g = t), (b = p);
            break;
        case 1:
            (r = q), (g = v), (b = p);
            break;
        case 2:
            (r = p), (g = v), (b = t);
            break;
        case 3:
            (r = p), (g = q), (b = v);
            break;
        case 4:
            (r = t), (g = p), (b = v);
            break;
        case 5:
            (r = v), (g = p), (b = q);
            break;
    }

    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    return `${r}, ${g}, ${b}`;
}

function hslToHexBefore(color) {
    let [h, s, l] = color.replaceAll(/%|°/g, '').split(',');
    return hslToHex(h, s, l);
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, '0'); // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function HexToHex(Hex) {
    if (Hex.length == 4) {
        Hex = `${Hex[0]}${Hex[1]}${Hex[1]}${Hex[2]}${Hex[2]}${Hex[3]}${Hex[3]}`;
    }
    return Hex;
}

function cmykToHex(color) {
    let [c, m, y, k] = color
        .replaceAll('%', '')
        .split(',')
        .map((num) => num / 100);
    color = cmykToRgb(c, m, y, k);
    return rgbElToHex(color);
}

function rgbElToHex(rgbEl) {
    let [r, g, b] = rgbEl.split(',');
    r = parseInt(r).toString(16);
    g = parseInt(g).toString(16);
    b = parseInt(b).toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;

    return `#${r}${g}${b}`;
}

function hexTorgbEl(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    return `${r}, ${g}, ${b}`;
}

function hexTocmykEl(hex) {
    let computedC = 0;
    let computedM = 0;
    let computedY = 0;
    let computedK = 0;

    hex = hex.charAt(0) == '#' ? hex.substring(1, 7) : hex;

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // BLACK
    if (r == 0 && g == 0 && b == 0) {
        return `0%, 0%, 0%, 100%`;
    }

    computedC = 1 - r / 255;
    computedM = 1 - g / 255;
    computedY = 1 - b / 255;

    let minCMY = Math.min(computedC, Math.min(computedM, computedY));

    computedC = Math.round(((computedC - minCMY) / (1 - minCMY)) * 100);
    computedM = Math.round(((computedM - minCMY) / (1 - minCMY)) * 100);
    computedY = Math.round(((computedY - minCMY) / (1 - minCMY)) * 100);
    computedK = Math.round(minCMY * 100);

    return `${computedC}%, ${computedM}%, ${computedY}%, ${computedK}%`;
}

function cmykToRgb(c, m, y, k) {
    let r, g, b;
    r = Math.round(255 - Math.min(1, c * (1 - k) + k) * 255);
    g = Math.round(255 - Math.min(1, m * (1 - k) + k) * 255);
    b = Math.round(255 - Math.min(1, y * (1 - k) + k) * 255);
    return `${r}, ${g}, ${b}`;
}

function rgbTohslEl(r, g, b) {
    (r /= 255), (g /= 255), (b /= 255);
    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h = 0, // achromatic
        s = 0, // achromatic
        l = (max + min) / 2;

    if (max != min) {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `${h}°, ${s}%, ${l}%`;
}

function rgbToHsv(r, g, b) {
    (r /= 255), (g /= 255), (b /= 255);

    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h = 0, // achromatic
        s,
        v = max;

    let d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max != min) {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }

        h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    v = Math.round(v * 100);

    return `${h}°, ${s}%, ${v}%`;
}

function changeColor() {
    hexEl.value = colorEl.value;
    rgbEl.value = hexTorgbEl(colorEl.value);
    cmykEl.value = hexTocmykEl(colorEl.value);
    let [r, g, b] = rgbEl.value.split(',');
    hsvEl.value = rgbToHsv(r, g, b);
    hslEl.value = rgbTohslEl(r, g, b);
    previewEl.style.backgroundColor = colorEl.value;
}

function changeColorAll({ target }) {
    let colorFunction = {
        hexEl: (color) => HexToHex(color),
        rgbEl: (color) => rgbElToHex(color),
        cmykEl: (color) => cmykToHex(color),
        hsvEl: (color) => hsvToHex(color),
        hslEl: (color) => hslToHexBefore(color),
    };
    colorEl.value = colorFunction[target.id](target.value);
    changeColor();
}

colorEl.addEventListener('change', changeColor);
[hexEl, rgbEl, cmykEl, hsvEl, hslEl].map((el) =>
    el.addEventListener('change', changeColorAll)
);
