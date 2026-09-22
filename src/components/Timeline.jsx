import './Timeline.css'

export default function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((item, index) => (
        <li className="timeline__item" key={item.label}>
          <div className="timeline__marker">
            <span className="timeline__dot">{index + 1}</span>
            {index < items.length - 1 && <span className="timeline__line" />}
          </div>
          <div className="timeline__content">
            <p className="timeline__label">{item.label}</p>
            <p className="timeline__description">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
