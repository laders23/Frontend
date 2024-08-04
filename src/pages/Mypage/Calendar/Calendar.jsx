import "./Calendar.css";

const MONTH = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const Calendar = () => {
	const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const date = new Date();

	return (
		<div className="calendar-wrapper">
			<h3>{MONTH[new Date().getMonth() - 1]}</h3>
			<table className="calendar">
				<thead>
					<tr>
						{daysOfWeek.map((day) => (
							<th key={day}>{day}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{Array.from({ length: 5 }).map((_, weekIndex) => (
						<tr key={weekIndex}>
							{daysOfWeek.map((_, dayIndex) => {
								const day = weekIndex * 7 + dayIndex + 1;

								return (
									<td
										key={dayIndex}
										className={
											day > 31
												? "inactive"
												: day == date.getDate()
												? "today"
												: ""
										}
									>
										{day <= 31 ? day : ""}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Calendar;
