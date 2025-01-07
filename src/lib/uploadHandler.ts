import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function uploadFile(file: File) {
  console.log('Starting upload process for file:', file.name)
  console.log('AWS Configuration:', {
    region: process.env.AWS_REGION,
    bucketName: process.env.AWS_S3_BUCKET_NAME,
    // Don't log credentials!
  })

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = `${Date.now()}-${file.name}`

  console.log('Prepared file for upload:', {
    filename,
    contentType: file.type,
    bufferSize: buffer.length
  })

  try {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: filename,
        Body: buffer,
        ContentType: file.type,
      }),
    )

    const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`
    console.log('Upload successful:', fileUrl)
    return fileUrl
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}
