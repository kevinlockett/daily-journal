import React from "react"
import moment from "moment"

export const Entry = ({
	entry,
	mood,
	onEditButtonClick,
	onDeleteButtonClick,
}) => {
	const getMessageType = () => {
		if (mood) {
			switch (mood.label) {
				case "Angry":
					return "is-danger"
				case "Happy":
					return "is-success"
				case "Ok":
					return "is-warning"
				case "Sad":
					return "is-primary"
				default:
					break
			}
		}
	}

	const dateString = entry.date_time
	const formattedDate = moment(dateString).format(`MMM DD, YYYY`)
	const formattedTime = moment(dateString).format("LT")

	return (
		<article
			className={`message ${getMessageType()}`}
			style={{ width: "100%" }}>
			<div className='message-body'>
				<p className='entry__concept'>{entry.concept}</p>
				<p className='entry__entry'>{entry.entry}</p>
				<p className='entry__date'>
					{formattedDate} at {formattedTime}
				</p>
				<p className='entry__mood'>{mood?.label}</p>
				<div className='buttons'>
					<button
						className={`button ${getMessageType()} is-outlined`}
						onClick={() => {
							onEditButtonClick(entry.id)
						}}>
						Edit
					</button>
					<button
						className={`button ${getMessageType()}`}
						onClick={() => {
							onDeleteButtonClick(entry.id)
						}}>
						Delete
					</button>
				</div>
			</div>
		</article>
	)
}
