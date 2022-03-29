import { createClient } from "@supabase/supabase-js"
import { NextPage } from "next"
import { Gallery } from "../components/Gallery"
import { DBImage } from "../utils/type"

interface IndexProps {
  images: Array<DBImage>
}

const Index: NextPage<IndexProps> = ({ images }) => {
  return <Gallery images={images} />
}

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { data } = await supabaseAdmin
    .from<DBImage>("images")
    .select("*")
    .order("id")

  return {
    props: {
      images: data,
    },
  }
}

export default Index
