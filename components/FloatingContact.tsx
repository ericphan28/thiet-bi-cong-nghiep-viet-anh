'use client'

import { useState } from 'react'
import { Phone, X, MessageCircle } from 'lucide-react'
import { companyInfo } from '@/lib/mock-data'

export default function FloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded buttons */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-4 duration-300">
          {/* Gọi điện */}
          <a
            href={`tel:${companyInfo.contact.phone[0]}`}
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            title="Gọi ngay"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold text-sm">{companyInfo.contact.phone[0]}</span>
          </a>

          {/* Zalo */}
          <a
            href={`https://zalo.me/${companyInfo.socialMedia.zalo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg transition-all hover:scale-105"
            title="Chat Zalo"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-semibold text-sm">Chat Zalo</span>
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 ${
          isExpanded
            ? 'bg-gray-600 hover:bg-gray-700'
            : 'bg-blue-600 hover:bg-blue-700 animate-bounce'
        }`}
        aria-label={isExpanded ? 'Đóng' : 'Liên hệ'}
      >
        {isExpanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Phone className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Pulse effect when collapsed */}
      {!isExpanded && (
        <div className="absolute bottom-0 right-0 w-14 h-14 rounded-full bg-blue-600 animate-ping opacity-20 pointer-events-none" />
      )}
    </div>
  )
}
