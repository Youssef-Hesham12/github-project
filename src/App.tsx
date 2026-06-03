import type { CSSProperties } from 'react'
import './App.css'

const logoUrl = '/rose-assets/logo.png'
const avatarUrl = '/rose-assets/avatar.png'

const customers = [
  '/rose-assets/customer-1.png',
  '/rose-assets/customer-2.png',
  '/rose-assets/customer-3.png',
  '/rose-assets/customer-4.png',
  '/rose-assets/customer-5.png',
  '/rose-assets/customer-6.png',
  '/rose-assets/customer-7.png',
  '/rose-assets/customer-8.png',
  '/rose-assets/customer-9.png',
]

const metrics = [
  { value: '2,478', label: 'Total Invoices', tone: 'gray', marker: '#12b84c' },
  { value: '983', label: 'Paid Invoices', tone: 'green', marker: '#12b84c' },
  { value: '1,256', label: 'Unpaid Invoices', tone: 'red', marker: '#ff5c5c' },
  { value: '652', label: 'Total Invoices Sent', tone: 'orange', marker: '#ff6f3d' },
]

const rows = customers.map((photo, index) => ({
  photo,
  name: 'Noah Kautzer',
  email: 'Noah97@hotmail.com',
  phone: '(809) 845-6965 x517',
  model: 'G390K7OI',
  status: index === 1 ? 'Pending' : [4, 5, 6, 7].includes(index) ? 'Active' : 'Processing',
}))

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m20 20-4.6-4.6m2.5-5.2a7.7 7.7 0 1 1-15.4 0 7.7 7.7 0 0 1 15.4 0Z" />
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <rect x="4" y="4" width="9" height="9" rx="2" />
      <rect x="19" y="4" width="9" height="9" rx="2" />
      <rect x="4" y="19" width="9" height="9" rx="2" />
      <rect x="19" y="19" width="9" height="9" rx="2" />
    </svg>
  )
}

function FormIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M8 5h11l5 5v17H8z" />
      <path d="M19 5v6h6M13 18h8M17 14v8" />
    </svg>
  )
}

function ReceiptIcon({ marker }: { marker: string }) {
  return (
    <span className="receipt-icon" style={{ '--marker': marker } as CSSProperties}>
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9 5v22l4-2.4 3 2.4 3-2.4 4 2.4V5z" />
        <path d="M13 12h6M13 17h6" />
      </svg>
    </span>
  )
}

function MiniChart({ tone }: { tone: string }) {
  return (
    <svg className={`mini-chart ${tone}`} viewBox="0 0 210 48" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 31 C16 23 24 48 41 35 S66 16 83 32 110 35 122 10 148 29 166 26 189 42 210 30" />
    </svg>
  )
}

function MetricCard({ value, label, tone, marker }: (typeof metrics)[number]) {
  return (
    <article className="metric-card">
      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
      <ReceiptIcon marker={marker} />
      <MiniChart tone={tone} />
    </article>
  )
}

function RevenueChart() {
  return (
    <section className="revenue-panel" aria-label="Total Revenue">
      <div className="chart-menu">≡</div>
      <h2>Total Revenue</h2>
      <div className="revenue-grid">
        <div className="y-axis">
          {['125', '100', '75', '50', '25', '0'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <svg className="revenue-line" viewBox="0 0 540 260" preserveAspectRatio="none" aria-hidden="true">
          <path d="M26 186 C60 206 86 216 110 206 C152 188 154 74 198 70 C240 66 240 193 278 194 C316 195 334 122 374 121 C410 121 414 174 438 178 C470 180 486 50 516 24" />
          {[26, 110, 198, 278, 374, 438, 516].map((x, index) => (
            <circle
              key={x}
              cx={x}
              cy={[186, 206, 70, 194, 121, 178, 24][index]}
              r="5"
            />
          ))}
        </svg>
        <div className="x-axis">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Status({ value }: { value: string }) {
  return (
    <span className={`status status-${value.toLowerCase()}`}>
      <span />
      {value}
    </span>
  )
}

function App() {
  return (
    <main className="rose-dashboard">
      <aside className="sidebar">
        <a className="brand" href="/" aria-label="Rose Happy Gift dashboard">
          <img src={logoUrl} alt="" />
          <div>
            <strong>Rose</strong>
            <span>Happy Gift</span>
          </div>
        </a>

        <nav aria-label="Primary navigation">
          <a className="active" href="/">
            <DashboardIcon />
            Dashboardddddddddddddddddddddd
          </a>
          <a href="/">
            <FormIcon />
            Product form
          </a>
          <a href="/">
            <FormIcon />
            Category
          </a>
        </nav>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <label className="search" aria-label="Search">
            <SearchIcon />
            <input type="search" placeholder="Search" />
          </label>
          <img className="profile" src={avatarUrl} alt="User profile" />
        </header>

        <section className="overview">
          <div className="metric-grid">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
          <RevenueChart />
        </section>

        <section className="history">
          <div className="section-title">
            <h1>Payment History111111111111</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
          </div>

          <div className="table-card">
            <table>
              <thead>
                <tr>
                  <th>Photo</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Model</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={`${row.email}-${index}`}>
                    <td>
                      <img className="customer" src={row.photo} alt="" />
                    </td>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                    <td>{row.model}</td>
                    <td>
                      <Status value={row.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pagination" aria-label="Pagination">
            <button aria-label="Previous page">‹</button>
            <button className="current">1</button>
            <button>2</button>
            <button>3</button>
            <button>.....</button>
            <button>10</button>
            <button aria-label="Next page">›</button>
          </div>
        </section>
      </section>
    </main>
  )
}

export default App
