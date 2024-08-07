
import Navbars from './Navbars'
import Drawer from './Drawer'
import Subdata from '../secondpage/Subdata'
function Subcategorys() {
  return (
    <div className="flex flex-col min-h-screen">
    <Navbars />

    <div className="flex flex-1">
      <div className="md:flex md:w-64 md:flex-shrink-0">
        <Drawer />
      </div>
      <main className="flex-auto p-4 overflow-y-auto">
        <Subdata/>
      </main>
    </div>
  </div>
  )
}

export default Subcategorys