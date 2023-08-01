import React from 'react'
import './index.css'

function Footer() {
    return (
      <div className='footer'>
    <p>contact me:</p>
    <ul>
      <li><a href="https://t.me/your_telegram_username" target="_blank">Telegram</a></li>
      <li><a href="viber://chat?number=your_viber_number" target="_blank">Viber</a></li>
      <li><a href="https://api.whatsapp.com/send?phone=your_whatsapp_number" target="_blank">WhatsApp</a></li>
    </ul>
      </div>
    )
}

export default Footer