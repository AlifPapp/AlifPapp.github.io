import { useEffect } from "react"

const SocialRedirect = ({ platform }) => {
  useEffect(() => {
    let url
    switch (platform) {
      case "github":
        url = "https://github.com/AlifPapp/"
        break
      case "instagram":
        url = "https://www.instagram.com/alif_papp/"
        break
      case "youtube":
        url = "https://www.youtube.com/@alif_papp/"
        break
      case "discord":
        url = "https://discord.com/invite/wqc6GsfrUS/"
        break
      default:
        url = "/404/"
    }

    window.location.replace(url)
  }, [platform])

  return null
}

export default SocialRedirect
