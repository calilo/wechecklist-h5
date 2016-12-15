fetch = null;
//---------------get all checklists------------------
Mock.mock("/api/checklist/getMyChecklists?start=0&size=30", {
  _len: 100,
  'list|30': [{
    'id|+1': 1,
    'headUrl': 'defaultImg.png',
    'title|1-2': '标题',
    'description|3-5': '这是描述',
    'author': 'sunz',
    'publishTime': Mock.Random.datetime(),
    'status': 10, //10--'new' 20--'done'
  }]
});
Mock.mock("/api/checklist/getMyChecklists?start=30&size=30", {
  _len: 100,
  'list|30': [{
    'id|+1': 31,
    'headUrl': 'defaultImg.png',
    'title|1-2': '标题',
    'description|3-5': '这是描述',
    'author': 'sunz',
    'publishTime': Mock.Random.datetime(),
    'status': 10, //10--'new' 20--'done'
  }]
});
//--------------get a checklist----------------------
Mock.mock(/\/api\/checklist\/getChecklist/, {
  'id': 1,
  'title|1-2': '标题',
  'description|3-5': '这是描述',
  'author': 'sunz',
  'pictures|0-2': ['http://www.kidsindustries.com/files/large/7e67fc67bcfd578da574731d43df9dd5.png']
});
Mock.mock('/api/checklist/finishChecklist', 'post', {
  'success': true
});
Mock.setup({
  timeout: '1000-2000'
});