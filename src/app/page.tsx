"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Images = { id: number, image: string }

export default function Home() {
  const [image, setImage] = useState<Images[]>([])

  useEffect(() => {
    let images: Images[] = [];

    for (let i = 1; i < 80; i++) {
      images.push({
        id: i,
        image: `https://picsum.photos/id/${i}/1000/1000`
      })
    }

    setImage(images)
  }, [])

  return (
    <div className="px-14 md:px-24 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5">
        {image.map(i => (
          <Image src={i.image} alt={i.id.toString()} width={500} height={500} className="rounded-lg" />
        ))}
      </div>
    </div>

  )
}
