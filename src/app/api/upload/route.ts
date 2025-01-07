import { NextResponse } from 'next/server'
import { uploadFile } from '@/lib/uploadHandler'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    console.log('Attempting to upload file:', {
      name: file.name,
      type: file.type,
      size: file.size
    })

    const fileUrl = await uploadFile(file)
    
    console.log('File uploaded successfully:', fileUrl)

    return NextResponse.json({ url: fileUrl })
  } catch (error) {
    console.error('Upload failed:', error)
    return NextResponse.json(
      { error: 'Upload failed' },
      { status: 500 }
    )
  }
} 