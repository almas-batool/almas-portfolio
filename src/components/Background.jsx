import Particles from "./bg/Particles"
import Gradient from "./bg/Gradient"
import Waves from "./bg/Waves"
import Parallax from "./bg/Parallax"
import Grid from "./bg/Grid"

/**
 * Choose ONE background style here
 * options:
 * "particles" | "gradient" | "waves" | "parallax" | "grid"
 */
const BACKGROUND_TYPE = "gradient"

export default function Background() {
  return (
    <>
      {BACKGROUND_TYPE === "particles" && <Particles />}
      {BACKGROUND_TYPE === "gradient" && <Gradient />}
      {BACKGROUND_TYPE === "waves" && <Waves />}
      {BACKGROUND_TYPE === "parallax" && <Parallax />}
      {BACKGROUND_TYPE === "grid" && <Grid />}
    </>
  )
}


