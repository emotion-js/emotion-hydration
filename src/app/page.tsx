export default function Home() {
  return (
    <div>
      <h2>How to demo</h2>

      <ol>
        <li>
          Run <span style={{ fontWeight: "bold" }}>
            npm run build && npm run start
          </span>
        </li>
        <li>
          Open the <a href="http://localhost:3000/emotion/suspense">emotion + suspense</a>. Open the console and notice error message
        </li>
        <li>
          Open the <a href="http://localhost:3000/normal/suspense">normal styling + suspense</a>. Open the console and notice NO error message present there
        </li>
      </ol>
      On top of this, if we remove the suspense boundary, all the errors dissapear. So it's only the combination of `emotion` + suspense.

      <ul>
        <li>
          Open the <a href="http://localhost:3000/emotion">emotion route</a>. Open the console and notice NO error message
        </li>
        <li>
          Open the <a href="http://localhost:3000/normal">normal styling</a> route. Open the console and notice NO error message

        </li>
      </ul>
    </div>
  )
}

export const dynamic = "force-dynamic";
