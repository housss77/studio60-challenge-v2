import * as React from "react"
import { navigate } from "gatsby"
import { useEffect } from "react"

export default function IndexPage() {
  useEffect(() => {
    navigate("/fr/", { replace: true })
  }, [])

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <p>
        Redirecting to <a href="/fr/">/fr/</a>
      </p>
    </main>
  )
}
