import React, { useEffect, useState } from "react"

const CenteredDiv = ({ children, className }) => {
  const [marginTop, setMarginTop] = useState("0")
  const [marginBottom, setMarginBottom] = useState("0")

  useEffect(() => {
    const handleResize = () => {
      const viewportHeight = window.innerHeight
      const divHeight = document.getElementById("centered-div").offsetHeight
      const newMarginTop = `${(viewportHeight - divHeight) / 2}px`
      const newMarginBottom = `${viewportHeight - divHeight - parseInt(newMarginTop)-1}px`
      setMarginTop(newMarginTop)
      setMarginBottom(newMarginBottom)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      id="centered-div"
      className={className}
      style={{ marginTop: marginTop, marginBottom: marginBottom }}
    >
      <div>{children}</div>
    </div>
  )
}

export default CenteredDiv
