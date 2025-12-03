radio.on()

miNumero = 0

def on_button_pressed_b():
    global miNumero
    miNumero = randint(1, 6)
    basic.show_number(miNumero)
    radio.send_number(miNumero)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_number(receivedNumber):
    global miNumero
    if receivedNumber > miNumero:
        basic.show_icon(IconNames.SAD)    
    elif receivedNumber < miNumero:
        basic.show_icon(IconNames.HAPPY)  
    else:
        basic.show_icon(IconNames.MEH)    
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_string("Hola")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

radio.set_group(1)