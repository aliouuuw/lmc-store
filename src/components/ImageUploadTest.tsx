'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ImageUploadTest() {
  const [status, setStatus] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('Uploading...')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed')
      }

      setImageUrl(data.url)
      setStatus('Upload successful!')
    } catch (error) {
      console.error('Upload error:', error)
      setStatus('Upload failed: ' + (error as Error).message)
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          name="file" 
          accept="image/*" 
          className="mb-4"
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Upload
        </button>
      </form>
      
      {status && <p className="mt-4">{status}</p>}
      {imageUrl && (
        <div className="mt-4">
          <p>Uploaded image:</p>
          <Image src={imageUrl} alt="Uploaded" className="mt-2 max-w-md" />
        </div>
      )}
    </div>
  )
} 