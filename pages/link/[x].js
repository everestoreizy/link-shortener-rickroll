import { useRouter, Router } from 'next/router'

const Thing = () => {
    const router = useRouter()
    const { x } = router.query

    const {pathname} = Router
    Router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    return <title>x - shorterlinkify</title>
}

export default Thing;