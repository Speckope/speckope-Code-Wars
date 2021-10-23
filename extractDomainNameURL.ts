// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string.

function domainName(url: string) {
  // Cut part before // if exists
  if (url.includes('//')) {
    url = url.split('//')[1];
  }

  // Cut next part www. if exists
  if (url.includes('www.')) {
    url = url.split('www.')[1];
  }

  // Cut everything after .
  url = url.split('.')[0];

  return url;
}

// Best answer
function domainName2(url) {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');
  return url.split('.')[0];
}

// wtf nice
function domainName3(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
