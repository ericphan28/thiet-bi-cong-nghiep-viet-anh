'use client'

import { useState } from 'react'
import Image from 'next/image'
import PlaceholderImage from './PlaceholderImage'

interface ImageWithFallbackProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
  priority = false
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <PlaceholderImage
        width={width || 400}
        height={height || 300}
        text={alt}
        className={className}
        bgColor="bg-gradient-to-br from-gray-100 to-gray-200"
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setHasError(true)}
    />
  )
}