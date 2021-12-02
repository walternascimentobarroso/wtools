(function () {
    'use strict';

    let cvs, ctx;
    let waves = [];
    let waveHeight = 30;
    let colours = ['#f00', '#0f0', '#00f'];

    function init() {
        cvs = document.querySelector('#wavesEl');
        ctx = cvs.getContext('2d');
        resizeCanvas(cvs);

        for (let i = 0; i < 3; i++) {
            new wave(colours[i], 1, 5);
        }

        setInterval(update, 16);
    }

    function update(array) {
        let fill = window;
        ctx.fillStyle = fill;
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.globalCompositeOperation = 'screen';
        for (let i = 0; i < waves.length; i++) {
            for (let j = 0; j < waves[i].nodes.length; j++) {
                bounce(waves[i].nodes[j]);
            }
            drawWave(waves[i]);
        }
        ctx.globalCompositeOperation = 'hue';
        ctx.fillStyle = fill;
    }

    function wave(colour, nodes) {
        this.colour = colour;
        this.nodes = [];
        for (let i = 0; i <= nodes + 2; i++) {
            let temp = [
                ((i - 1) * cvs.width) / nodes,
                0,
                Math.random() * 200,
                0.3,
            ];
            this.nodes.push(temp);
        }
        waves.push(this);
    }

    function bounce(node) {
        node[1] = (waveHeight / 2) * Math.sin(node[2] / 20) + cvs.height / 2;
        node[2] = node[2] + node[3];
    }

    function drawWave(obj) {
        let diff = function (a, b) {
            return (b - a) / 2 + a;
        };
        ctx.fillStyle = obj.colour;
        ctx.beginPath();
        ctx.moveTo(0, cvs.height);
        ctx.lineTo(obj.nodes[0][0], obj.nodes[0][1]);
        for (let i = 0; i < obj.nodes.length; i++) {
            if (obj.nodes[i + 1]) {
                ctx.quadraticCurveTo(
                    obj.nodes[i][0],
                    obj.nodes[i][1],
                    diff(obj.nodes[i][0], obj.nodes[i + 1][0]),
                    diff(obj.nodes[i][1], obj.nodes[i + 1][1])
                );
            } else {
                ctx.lineTo(obj.nodes[i][0], obj.nodes[i][1]);
                ctx.lineTo(cvs.width, cvs.height);
            }
        }
        ctx.closePath();
        ctx.fill();
    }

    function resizeCanvas(canvas, width, height) {
        if (width && height) {
            canvas.width = width;
            canvas.height = height;
        } else {
            if (window.innerHeight > 1920) {
                canvas.width = window.innerWidth;
            } else {
                canvas.width = 1920;
            }

            canvas.height = waveHeight;
        }
    }

    document.addEventListener('DOMContentLoaded', init, false);
})();
