import { useRouter } from 'next/router'

const Thing = () => {
    const router = useRouter()
    const { x } = router.query

    router.push("https://www.youtube.com/watch?v=dQw4w9WgXcQ")

    return <title>{x}</title>
}

export default Thing;