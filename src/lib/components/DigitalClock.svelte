<script lang="ts">
	import { onMount } from 'svelte';

	let updateEventId = 0;
	let resizeEventId = 0;

	const numPad0 = (time: number) => {
		let str = '';
		const cStr = time.toString();
		if (cStr.length < 2) {
			str = 0 + cStr;
		} else {
			str = cStr;
		}
		return str;
	};

	const calcDeg = (deg: number) => {
		return (Math.PI / 180) * (deg - 90);
	};
	onMount(() => {
		const canvas = document.getElementById('digitalClock') as HTMLCanvasElement;
		const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

		let avg = 0;
		const SEC_COLOR = 'hsla(180, 85%, 5%, .7)';
		const MIN_COLOR = 'hsla(180, 95%, 15%, 1)';
		const HOUR_COLOR = 'hsla(180, 75%, 25%, 1)';

		const drawSeconds = () => {
			const ang = 0.006 * (currentSec * 1000 + currentMillisec);
			const xCenter = canvas.width / 2;
			const yCenter = canvas.height / 2;
			const sSize = xCenter < yCenter ? xCenter : yCenter;
			ctx.fillStyle = SEC_COLOR;
			ctx.beginPath();
			ctx.moveTo(xCenter, yCenter);
			ctx.lineTo(xCenter, 50);
			ctx.arc(xCenter, yCenter, sSize * 0.4, calcDeg(0), calcDeg(ang), false);
			ctx.lineTo(xCenter, yCenter);
			ctx.shadowColor = 'hsla(180, 45%, 5%, .4)';
			ctx.shadowBlur = 15;
			ctx.shadowOffsetX = 15;
			ctx.shadowOffsetY = 15;
			ctx.fill();
		};

		const drawMinutes = () => {
			const ang = 0.0001 * (currentMin * 60 * 1000 + currentSec * 1000 + currentMillisec);
			const xCenter = canvas.width / 2;
			const yCenter = canvas.height / 2;
			const sSize = xCenter < yCenter ? xCenter : yCenter;
			ctx.fillStyle = MIN_COLOR;
			ctx.beginPath();
			ctx.moveTo(xCenter, yCenter);
			ctx.lineTo(xCenter, 100);
			ctx.arc(xCenter, yCenter, sSize * 0.6, calcDeg(0), calcDeg(ang), false);
			ctx.lineTo(xCenter, yCenter);
			ctx.shadowColor = 'hsla(180, 25%, 5%, .4)';
			ctx.shadowBlur = 15;
			ctx.shadowOffsetX = 15;
			ctx.shadowOffsetY = 15;
			ctx.fill();
		};

		function drawHours() {
			let ang =
				0.000008333 *
				(currentHr * 60 * 60 * 1000 + currentMin * 60 * 1000 + currentSec * 1000 + currentMillisec);
			if (ang > 360) {
				ang -= 360;
			}
			const xCenter = canvas.width / 2;
			const yCenter = canvas.height / 2;
			const sSize = xCenter < yCenter ? xCenter : yCenter;
			ctx.fillStyle = HOUR_COLOR;
			ctx.beginPath();
			ctx.moveTo(xCenter, yCenter);
			ctx.lineTo(xCenter, 150);
			ctx.arc(xCenter, yCenter, sSize * 0.8, calcDeg(0), calcDeg(ang), false);
			ctx.lineTo(xCenter, yCenter);
			ctx.shadowColor = 'hsla(180, 45%, 5%, .4)';
			ctx.shadowBlur = 15;
			ctx.shadowOffsetX = 15;
			ctx.shadowOffsetY = 15;
			ctx.fill();
		}

		const updateTime = () => {
			const currentDate = new Date();
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			currentSec = currentDate.getSeconds();
			currentMillisec = currentDate.getMilliseconds();
			currentMin = currentDate.getMinutes();
			currentHr = currentDate.getHours();
			if (currentHr == 0) {
				currentHr = 12;
			} else if (currentHr >= 13) {
				currentHr -= 12;
			}
			drawHours();
			drawMinutes();
			drawSeconds();

			const realTime = currentHr + ':' + numPad0(currentMin) + ':' + numPad0(currentSec);

			ctx.shadowColor = 'hsla(180, 100%, 5%, 1)';
			ctx.shadowBlur = 100;
			ctx.shadowOffsetX = 12;
			ctx.shadowOffsetY = 0;
			ctx.fillStyle = 'hsla(0,0%,0%,.7)';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';
			ctx.font = "bold 1.6em 'Noto Serif', serif";
			ctx.fillText(realTime, canvas.width / 2, canvas.height / 2);
		};

		let currentHr = 0;
		let currentMin = 0;
		let currentSec = 0;
		let currentMillisec = 0;
		const resizeEvent = () => {
			const rect = canvas.getClientRects();
			const { height, width } = rect[0];
			canvas.width = width;
			canvas.height = height;
			updateTime();
		};
		resizeEvent();
		window.addEventListener('resize', resizeEvent);
		updateEventId = window.setInterval(updateTime, 50);
		return () => {
			clearInterval(updateEventId);
			window.removeEventListener('resize', resizeEvent);
		};
	});
</script>

<div class="clockArea">
	<canvas id="digitalClock" height="300" width="300" />
</div>

<style>
	.clockArea {
		width: 100%;
		height: 100%;
		background-color: white;
		padding: 30px;
	}

	#digitalClock {
		width: 100%;
		height: 100%;
	}
</style>
