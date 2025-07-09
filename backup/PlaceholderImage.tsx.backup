interface PlaceholderImageProps {
  width: number
  height: number
  text?: string
  className?: string
  bgColor?: string
  textColor?: string
}

export default function PlaceholderImage({ 
  width, 
  height, 
  text = `${width}x${height}`,
  className = "",
  bgColor = "bg-gray-200",
  textColor = "text-gray-500"
}: PlaceholderImageProps) {
  return (
    <div 
      className={`${bgColor} ${textColor} ${className} flex items-center justify-center relative overflow-hidden`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Text content */}
      <div className="text-center z-10">
        <div className="text-4xl mb-2">🛞</div>
        <div className="font-medium text-sm">{text}</div>
        <div className="text-xs opacity-70">{width} × {height}</div>
      </div>
    </div>
  )
}
