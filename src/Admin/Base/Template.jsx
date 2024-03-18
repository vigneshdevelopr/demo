import AdminNav from "../admin_components/Navbar"

const Template = ({children}) => {
  return (
    <div>
        <AdminNav />
        <main>
            {children}
        </main>
    </div>
  )
}

export default Template