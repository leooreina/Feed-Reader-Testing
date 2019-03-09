/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined(); // Make sure allFeeds is defined
            expect(allFeeds.length).not.toBe(0); // Make sure allFeeds is not empty
        });


        /* Write two tests that loops through each feed
         * in the allFeeds object. The first takes the url, make sure it's
         * not empty and it's defined. The second one makes the same thing,
         * but for the name property.
         */
        it('url defined', function() {
            allFeeds.forEach(function (item) {
                const url = item.url; // Takes the URL
                expect(url.length).not.toBe(0); // Make sure url is not empty
                expect(url).toBeDefined(); // Make sure url is defined
            });
        });

        it('name defined', function() {
            allFeeds.forEach(function (item) {
                const name = item.name; // Takes the name
                expect(name.length).not.toBe(0); // Make sure name is not empty
                expect(name).toBeDefined(); // Make sure name is defined
            });
        });
    });

    describe('The menu', function() {

        /* Expect that the body element has the Class menu-hidden
         * by default.
         */
        it('menu element is hidden', function() {
        	
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Expect that once the click is detected, the class
         * menu-hidden in the body element should be false, showing
         * the menu. After another click, then the menu is hidden.
         */
        it('change visibility when clicked', function(){

            $('.menu-icon-link').trigger('click'); // detects the click
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click'); // detects another click
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });
    
    describe('Initial Entries', function() {

        // run Async
        beforeEach(function(done) {
            
            // load the feed
            loadFeed(0, function() {
                done();
            });
                
        });

        // Make sure that there is an element in the container
        it('there is an element in the feed container', function() {
            expect($('.feed').length).not.toBe(0); // Make sure that the .feed is not empty
        });

    });
    
    describe('New Feed Selection', function() {

        // run Async
        beforeEach(function(done) {

            // Load the feeds and save them in two variables
            loadFeed(0, function() {
                entryOne = $('.feed').find(allFeeds.url);
            });
            loadFeed(1, function() {
                entryTwo = $('.feed').find(allFeeds.url);
                done();
            });

        });

        // compare the two feeds and make sure that the new feed changes
        it('new feed changes', function() {
            expect(entryOne).not.toBe(entryTwo); // Make sure that the first feed is different from the second feed. 
        });    

    });
    

}());
