import Image from 'next/image'

export default function Main() {
  return (
    <>
      <Image className='portrait' src="portrait.svg" alt='placeholder' height={250} width={250} />
      <div className='title-header'>
        <h1>
          MiMi&apos;s
        </h1>
        <h2>
          WORKSHOP
        </h2>
        <h3>
          Hand-Made Crafts
        </h3>
      </div>
    </>
  );
};