import Link from "next/link";

const RaggedyButton = () => {
  return (
    <footer>
      <Link href="/raggedy_doll">
        <div className="raggedy-button">
          <span>
            Read about MiMi&apos;s <br />
            favorite doll, Raggedy Ann!
          </span>
        </div>
      </Link>
    </footer>
  );
};

export default RaggedyButton;
