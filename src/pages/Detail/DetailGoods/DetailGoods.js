import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailGoods.scss';

function DetailGoods({ mainImgURL, setMainImgURL, goodsData }) {
  const [heartLike, setHeartLike] = useState(false);
  const [goodsCount, setGoodsCount] = useState([]);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cart');
  };

  const checkGoodsCount = e => {
    setGoodsCount(e.target.value);
  };

  const toggleLike = () => {
    setHeartLike(!heartLike);
  };

  // 빽앤드로 수량 데이터 보내기
  // http://10.58.2.22:8000/orders/cart
  const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');

  const postQuantity = () => {
    fetch('http://10.58.2.22:8000/orders/cart', {
      method: 'POST',
      headers: {
        Authorization: ACCESS_TOKEN,
      },
      body: JSON.stringify({
        product_option_id: goodsData.result.id,
        quantity: goodsCount,
      }),
    })
      .then(res => res.json())
      .then(result => console.log(result));
    alert('장바구니에 담겼습니다.');
  };

  return (
    <div className="detailGoods">
      {mainImgURL && (
        <div className="goodsImgWrapper">
          <div className="goodsImgContainer">
            <img
              src={mainImgURL}
              className="goodsImg"
              width={610}
              height={610}
              alt="제품사진"
            />
            <div className="goodsSmallImg">
              {goodsData.result.product_images.map((goodsImg, i) => {
                return (
                  <div
                    className="smallImgList"
                    key={i}
                    onClick={() => {
                      setMainImgURL(goodsImg);
                    }}
                  >
                    <img
                      src={goodsImg}
                      width={60}
                      height={60}
                      alt="제품미니사진"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="goodsFormWrapper">
            <div className="goodsFormContainer">
              <header className="goodsFormHeader">
                <div className="goodsFormHeaderTop">
                  <span className="goodsFormHeaderTitle">
                    {goodsData.result.name}
                  </span>
                  <span
                    className={`${
                      goodsData.result.discount_rate === 0
                        ? 'invisible'
                        : 'goodsFormHeaderSale'
                    }`}
                  >
                    SALE
                  </span>
                  <span
                    className={`${
                      goodsData.result.discount_rate === 0
                        ? 'invisible'
                        : 'goodsFormHeaderBest'
                    }`}
                  >
                    BEST
                  </span>
                </div>
                <div className="goodsFormHeaderPrice">
                  <div
                    className={`${
                      goodsData.result.discount_rate === 0
                        ? 'invisible'
                        : 'originalPrice'
                    }`}
                  >
                    {parseInt(goodsData.result.option_price)}원
                  </div>
                  <span
                    className={`${
                      goodsData.result.discount_rate === 0
                        ? 'invisible'
                        : 'saleRate'
                    }`}
                  >
                    {goodsData.result.discount_rate}%
                  </span>
                  <span className="salePrice">
                    {parseInt(goodsData.result.discounted_price)}원
                  </span>
                  <i className="fa-solid fa-share-nodes" />
                </div>
              </header>
              <p className="goodsSummaryText">{goodsData.result.description}</p>
              <div className="goodsFormItemDetail">
                {PURCHASE_INFO.map((purchase, i) => {
                  return (
                    <p key={i}>
                      <span className="itemDetailInfo">{purchase.title}</span>
                      {purchase.content}
                    </p>
                  );
                })}
              </div>
              <div className="goodsFormItemQuantity">
                <p className="goodsQuantity">수량 *</p>
                <select
                  className="goodsQuantitySelect"
                  onChange={checkGoodsCount}
                >
                  <option value={1}>1개</option>
                  <option value={2}>2개</option>
                  <option value={3}>3개</option>
                  <option value={4}>4개</option>
                  <option value={5}>5개</option>
                </select>
              </div>
              <div className="goodsFormButton">
                <button id="buyButton" onClick={goToCart}>
                  구매하기
                </button>
                <button onClick={postQuantity}>장바구니</button>
                <button onClick={toggleLike}>
                  <i
                    id={`${heartLike ? 'realHeart' : 'emptyHeart'}`}
                    className="fa-solid fa-heart"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailGoods;

const PURCHASE_INFO = [
  { id: 1, title: '구매 혜택', content: '100 포인트 적립예정' },
  { id: 2, title: '배송 방법', content: '택배' },
  {
    id: 3,
    title: '배송비',
    content: '3,000원 (30,000원 이상 무료 배송) | 도서산 간 배송비 추가',
  },
  {
    id: 4,
    title: '배송 안내',
    content: '오후 1시까지 주문 시 당일 출고 됩니다.',
  },
];
