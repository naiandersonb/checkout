const buttonUpsell = document.getElementById('tm-upsell');
const buttonCancelUpsell = document.getElementById('tm-upsell-cancel');
// const tokenUrl = window.location.href;
const params = new URLSearchParams(window.location.search);


buttonUpsell.addEventListener('click', async () => {
  const offer_id = buttonUpsell.dataset.offer;
  const product_id = buttonUpsell.dataset.prod;
  const user_id = params.get("user_id");
  const customer_id = params.get("customer_id");

  const data = JSON.stringify({
    offer_id,
    user_id,
    customer_id,
    product_id,
  })
  console.log(JSON.parse(data))

  await fetch('https://v1.themembers.dev.br/api/checkout/upsell', {
    method: 'POST',
    body: JSON.stringify({
      offer_id,
      user_id,
      customer_id,
      product_id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(res => res.json()).then(res => console.log({ res }))
    .catch(err => console.log({ err }));
})

buttonCancelUpsell.addEventListener('click', () => {
  console.log('cancel upsell');
});