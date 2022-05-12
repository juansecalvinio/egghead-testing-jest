import formatList from "./format-list";

test('can format a list', () => {
  const formattedList = formatList(
    'Star Wars Names',
    [
      { name: 'Luke Skywalker' },
      { name: 'Obi-Wan Kenobi' },
      { name: 'Han Solo' },
      { name: 'Chewbacca' },
    ],
    'name'
  );
  expect(formattedList).toMatchSnapshot();
})