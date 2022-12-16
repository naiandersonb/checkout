const buttonUpsell = document.getElementById('tm-upsell');
const buttonCancelUpsell = document.getElementById('tm-upsell-cancel');
const tokenUrl = window.location.href;
const params = new URLSearchParams(window.location.search);


buttonUpsell.addEventListener('click', async () => {
  const offer_id = buttonUpsell.dataset.offer;
  const product_id = buttonUpsell.dataset.prod;
  const user_id = params.get("user_id");
  const customer_id = params.get("customer_id");
  // const token = params.get("token");

  const data = JSON.stringify({
    offer_id,
    user_id,
    customer_id,
    product_id,
  })

  // alert(JSON.stringify(data, null, 2))
  await fetch('https://v1.themembers.dev.br/api/checkout/upsell', {
    method: 'POST',
    body: data
  })
    .then(res => res.json()).then(res => console.log({ res }))
    .catch(err => console.log({ err }));
})

buttonCancelUpsell.addEventListener('click', () => {
  console.log('cancel upsell');
});