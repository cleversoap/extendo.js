//  Retrieves the last element of the array
Array.prototype.last = function ()
{
    return this[this.length - 1];
};

//  Counts the number of times a value occurs in the array
Array.prototype.count = function (val)
{
    var cnt = 0;
    
    if (this.length > 0)
    {
        var n = this.length - 1;

        do
        {
            if (this[n] === val)
            {
                cnt++;
            }

        }
        while(n--);
    }

    return cnt;
};

//  Removes the element at the specified index in the array
Array.prototype.removeAt = function (idx)
{
    this.splice(idx,1);
};

//  Remove the first element that contains the specified value
Array.prototype.removeFirst = function (val)
{
    this.removeAt(this.indexOf(val));
};

//  Remove the last element that contains the specified value
Array.prototype.removeLast = function (val)
{
    this.removeAt(this.lastIndexOf(val));
};

//  Remove all elements with value
Array.prototype.removeAll = function (val)
{
    while(this.indexOf(val) >= 0)
    {
        this.removeAt(this.indexOf(val));
    }

    return this.length;
};

//  Remove nth element with value
Array.prototype.removeNth = function (val, n)
{
    var cidx = 0;
    for (var i = 0; i < this.length; ++i)
    {
        if (this[i] === val)
        {
            if (cidx === n)
            {
                this.removeAt(i);
                break;
            }
            else
            {
                cidx++;
            }
        }
    }
};
