import IdCard from '@/components/idcard/id'
const Id = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="mt-12 mb-8"> 
        <h1 className="text-white text-3xl text-center mb-4">ID Card</h1>
        <IdCard name="Yashwanth" qrData="https://aaa.com" />
      </div>
    </div>
  )
}
export default Id
