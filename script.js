const buttonUpsell = document.getElementById('tm-upsell');
const buttonCancelUpsell = document.getElementById('tm-upsell-cancel');
const tokenUrl = window.location.href;


buttonUpsell.addEventListener('click', async () => {
  const offer_id = buttonUpsell.dataset.off;
  const product_id = buttonUpsell.dataset.prod;

  const urlSplit = tokenUrl.split('?token=');
  const token = urlSplit[1];

  const data = {
    offer_id,
    product_id,
    token
  }

  await fetch('/link/post', {
    method: 'POST',
    body: data
  })
    .then(res => console.log({ res }))
    .catch(err => console.log({ err }));

})

buttonCancelUpsell.addEventListener('click', () => {
  console.log('cancel upsell');
})