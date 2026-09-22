import './TerminalPanel.css'

export default function TerminalPanel({ title, children }) {
  return (
    <div className="terminal">
      <div className="terminal__header">
        <span className="terminal__dot" />
        <span className="terminal__dot" />
        <span className="terminal__dot" />
        {title && <span className="terminal__title">{title}</span>}
      </div>
      <div className="terminal__body">{children}</div>
    </div>
  )
}
