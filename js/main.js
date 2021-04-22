// https://www.feriadosapp.com/api/holidays.json
console.log('ok');

$('document').ready(() => {
  const tableHead = $('#table thead');
  const tableBody = $('#table tbody');
  const loading = $('#loading');
  const url = 'https://www.feriadosapp.com/api/holidays.json';

  const getData = () =>
    $.ajax({
      url,
      success: (data) => {
        return data;
      },
      error: (error) => {
        return error;
      },
    });

  (async () => {
    try {
      const { data } = await getData();
      const tHead = Object.keys(data[0]).map(
        (d) => `<th scope='col'>${d}</th>`,
      );

      const tBody = data.map((d) => {
        const td = Object.values(d).map((d) => `<td>${d}</td>`);
        return `<tr>${td}</tr>`;
      });

      tableHead.html(tHead);
      tableBody.html(tBody);
      loading.addClass('d-none');
    } catch (error) {
      console.log(error);
    }
  })();
});
