<script>
	import DigitalClock from '$lib/components/DigitalClock.svelte';
	import { DatePicker, DatePickerInput } from 'carbon-components-svelte';
</script>

<div>
	<!-- <div class="clockArea">
		<DigitalClock />
		<div class="datePickerArea">
			<DatePicker datePickerType="single" on:change>
				<DatePickerInput labelText="Meeting date" placeholder="mm/dd/yyyy" />
			</DatePicker>
		</div>
	</div> -->
</div>

<style>
	.clockArea {
		height: 300px;
		position: relative;
	}
	.datePickerArea {
		position: absolute;
		right: 10px;
		bottom: 10px;
	}
</style>
