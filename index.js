const check=require('./js');

const chai=require('chai').assert;

describe('object or not object',function () {
    it('The result is object',function () {

        function check(input) {

            return input;

        }
        let object=check({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''});

        chai.equal(typeof object, typeof object )

    });

    it('the object method',function () {
        let object=check({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        });
        let array=['GET','POST','DELETE','CONNECT']
        chai.equal(array.indexOf(object.method),-1);
    });

    it('the object version',function () {
        let object=check({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        });
        let arr=['HTTP/0.9','HTTP/1.0','HTTP/1.1','HTTP/2.0'];
        chai.equal(arr.indexOf(object.version),-1);
    });
    it('the object message',function () {
        let object=check({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
        });

        let message=['<', '>', '\'', '&',`'`,'"'];
        chai.equal(message.indexOf(object.message),-1);
    });
});
