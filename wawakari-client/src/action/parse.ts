export default async function get_parse(text: string) {
    const res = await fetch(`${process.env.SERVER_URL}${text}`)
    return res.json()
}

