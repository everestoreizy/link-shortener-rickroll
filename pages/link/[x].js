import { useRouter } from 'next/router'

const Thing = () => {
    const router = useRouter()
    const { x } = router.query

    return "<script>window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';</script>"
}

export default Thing;