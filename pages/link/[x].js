import { useRouter, Router } from 'next/router'

const Thing = () => {
    const router = useRouter()
    const { x } = router.query

    return <title>x - shorterlinkify</title>
}

componentDidMount(){
    const {pathname} = Router
    Router.push('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}

export default Thing;