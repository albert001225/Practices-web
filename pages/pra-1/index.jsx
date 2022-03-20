import React from 'react';
import Image from 'next/image';

export default function Pra_1() {
    const w_1 = 400;
    const h_1=250;
  return (
    <>
    
    <div className="container">
      <div className="up">
      <Image className='img'  src="/images/tourism.jpg" alt='n1' width={"100%"} height={"20%"}/>
        <h1>Lorem, ipsum dolor sit amet</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo eveniet
          in mollitia maxime soluta delectus tempore perspiciatis repellat quasi
          rem at dolor, natus numquam est accusantium assumenda totam quia. In.
        </p>
      </div>

      <div className="up-mid">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad, ipsam
          error! Adipisci, tempore atque aspernatur, explicabo accusamus
          voluptatibus minus illo, nobis reprehenderit ab velit eaque dolore
          enim perspiciatis neque commodi!
        </p>
      </div>

      <div className="mid">
        <div className="caja">
          <h3>Lorem ipsum dolor sit.</h3>
          <Image src="/images/tiwanaku.jpg" alt='n1'  width={w_1} height={h_1} />
          <p>bs. 853</p>
        </div>
        <div className="caja">
          <h3>Lorem ipsum dolor sit.</h3>
          <Image src="/images/tiwanaku.jpg" alt='n1' width={w_1} height={h_1} />
          <p>bs. 234</p>
        </div>
        <div className="caja">
          <h3>Lorem ipsum dolor sit.</h3>
          <Image src="/images/villa_tunari.jpg" alt='n1' width={w_1} height={h_1} />
          <p>bs. 237</p>
        </div>
      </div>

      <div className="mid-down">
        <h2>Lorem ipsum dolor sit :</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
          tempore!
        </p>
      </div>

      <div className="down-start">
        <div className="head">
          <div className="_title">Image</div>
          <div className="_title">Product</div>
          <div className="_title">Price</div>
          l
          <div className="_title">Quantity</div>
          <div className="_title">Subtotal</div>
        </div>
        <div className="down">
          <div className="caj">
            <div className="title">
              <Image src="/images/tiwanaku.jpg" alt='n1' width={200} height={140} />
              <Image src="/images/uyuni.webp" alt='n1' width={200} height={140} />
            </div>
          </div>
          <div className="caj">
            <div className="product">
              <h5>Tiwanaku</h5>
              <h5>Uyuni journey</h5>
            </div>
          </div>
          <div className="caj">
            <div className="price">
              <p>300 bs</p>
              <p>400 bs</p>
            </div>
          </div>
          <div className="caj">
            <div className="quantity">
              <p>1</p>
              <p>2</p>
            </div>
          </div>
          <div className="caj">
            <div className="subtobal">
              <p>300</p>
              <p>800</p>
            </div>
          </div>
        </div>
        <div className="head-end">
          <div className="_title-end">bs. 1100</div>
          <div className="_title-end">Totals</div>
        </div>
      </div>
    </div>
    </>
  )
}
