// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';


import { MessageInput } from '../MessageInput';


describe('MessageInput', () => {
    it('should render the message', () => {
        const messageInputComponent = render(<MessageInput message='test' status='success'/>);
        expect(messageInputComponent).toMatchSnapshot();
    });
});