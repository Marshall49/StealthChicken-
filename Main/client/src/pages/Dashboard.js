import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { FormBtn, Input, TextArea } from '../../components/Form';
import { Article, ArticleList } from '../../components/ArticleFeed';
import Comment from '../../components/AddComment';
import CommentFeed from '../../components/CommentFeed';







// Modal for article detail
<Modal>
	<ModalHeader text="Modal Header" />
	<ModalBody>
        
        
	</ModalBody>
	<ModalFooter>
		<Button type="primary">Modal Footer</Button>
		<Button type="link-cancel">Button</Button>
	</ModalFooter>
</Modal>


// modal for adding a case
<Modal>
	<ModalHeader text="Modal Header" />
	<ModalBody>

        <h2>Add Your Thoughts To The Discussion</h2>

        <form>
            <TextArea
                value={}
                onChange={}
                name="comment"
                placeholder="Add comment here..."
            />
            <FormBtn 
                disabled={}
                onClick={}
            >
            Submit
            </FormBtn>
        </form>

	</ModalBody>
	<ModalFooter>
		<Button type="primary">Modal Footer</Button>
		<Button type="link-cancel">Button</Button>
	</ModalFooter>
</Modal>