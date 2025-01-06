import About from "../_components/About";

// In your page component
export default function AboutUs() {
  const history = "Our restaurant has been serving delicious meals since 1995.";
  const aboutImg = "/aboutusImage.webp"

  return (
    <div>
      <About history={history} aboutImg={aboutImg} />
    </div>
  );
}
