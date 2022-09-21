export const getDate = () => {
  const options = { month: 'long', year: 'numeric', day: '2-digit' } as const;
    
  return new Date().toLocaleDateString('en-US', options)
};

export const getDates = (content: string) => {
  const reg = /(0?[1-9]|[12]\d|30|31)[^\w\d\r\n:](0?[1-9]|1[0-2])[^\w\d\r\n:](\d{4}|\d{2})/g;
  return content.match(reg)?.join(', ') || '';
};