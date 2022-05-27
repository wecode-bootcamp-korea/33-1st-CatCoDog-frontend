import React from 'react';
import './Cart.scss';
import { useState, useEffect } from 'react';
import ListOn from './ListOn';
import EmptyUi from './EmptyUi';
// import EmptyUi from './EmptyUi';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const toTal = cartList.length;
  const Empty = cartList.length === 0;

  useEffect(() => {
    fetch('/data/cartList.JSON')
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <section className="jaesungCart">
      <div className="inside">
        <div className="basket">
          장바구니 <span className="blue">{toTal}</span>
        </div>
        <div className="cart">
          <div className="tableWrapper">
            <table>
              <thead>
                <th className="checkBox1">
                  <input type="checkbox" />
                </th>
                <th className="InfoTh">상품정보</th>
                <th className="thcartinfo">수량</th>
                <th className="thcartinfo">주문금액</th>
              </thead>
            </table>
            <div>
              {!Empty ? (
                <ListOn cartList={cartList} total={toTal} />
              ) : (
                <EmptyUi Empty={Empty} />
              )}
              {/* {!Empty ? <EmptyUi Empty={Empty} /> : null} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
